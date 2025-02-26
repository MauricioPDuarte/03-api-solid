import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: `Near Gym`,
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    await gymsRepository.create({
      title: `Far Gym`,
      description: null,
      phone: null,
      latitude: -77.2092052,
      longitude: -89.6401091,
    })

    const { gyms } = await sut.execute({
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Near Gym',
      }),
    ])
  })

  //   it('should be able to fetch paginated gyms search', async () => {
  //     for (let i = 1; i <= 22; i++) {
  //       await gymsRepository.create({
  //         title: `JavaScript Gym ${i}`,
  //         description: null,
  //         phone: null,
  //         latitude: 0,
  //         longitude: 0,
  //       })
  //     }

  //     const { gyms } = await sut.execute({
  //       page: 2,
  //       query: 'JavaScript',
  //     })

  //     expect(gyms).toHaveLength(2)
  //     expect(gyms).toEqual([
  //       expect.objectContaining({
  //         title: 'JavaScript Gym 21',
  //       }),
  //       expect.objectContaining({
  //         title: 'JavaScript Gym 22',
  //       }),
  //     ])
  //   })
})
