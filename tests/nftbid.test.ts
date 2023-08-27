import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { bidAnnounce } from "../generated/schema"
import { bidAnnounce as bidAnnounceEvent } from "../generated/nftbid/nftbid"
import { handlebidAnnounce } from "../src/nftbid"
import { createbidAnnounceEvent } from "./nftbid-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let minPrice = BigInt.fromI32(234)
    let bidStartTime = BigInt.fromI32(234)
    let bidEndTime = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newbidAnnounceEvent = createbidAnnounceEvent(
      nftAddress,
      tokenId,
      minPrice,
      bidStartTime,
      bidEndTime,
      owner
    )
    handlebidAnnounce(newbidAnnounceEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("bidAnnounce created and stored", () => {
    assert.entityCount("bidAnnounce", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "bidAnnounce",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "bidAnnounce",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "bidAnnounce",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "minPrice",
      "234"
    )
    assert.fieldEquals(
      "bidAnnounce",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bidStartTime",
      "234"
    )
    assert.fieldEquals(
      "bidAnnounce",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bidEndTime",
      "234"
    )
    assert.fieldEquals(
      "bidAnnounce",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
