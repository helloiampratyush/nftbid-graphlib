import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  bidAnnounce,
  bidDone,
  bidtime,
  itemListed
} from "../generated/nftbid/nftbid"

export function createbidAnnounceEvent(
  nftAddress: Address,
  tokenId: BigInt,
  minPrice: BigInt,
  bidStartTime: BigInt,
  bidEndTime: BigInt,
  owner: Address
): bidAnnounce {
  let bidAnnounceEvent = changetype<bidAnnounce>(newMockEvent())

  bidAnnounceEvent.parameters = new Array()

  bidAnnounceEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  bidAnnounceEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  bidAnnounceEvent.parameters.push(
    new ethereum.EventParam(
      "minPrice",
      ethereum.Value.fromUnsignedBigInt(minPrice)
    )
  )
  bidAnnounceEvent.parameters.push(
    new ethereum.EventParam(
      "bidStartTime",
      ethereum.Value.fromUnsignedBigInt(bidStartTime)
    )
  )
  bidAnnounceEvent.parameters.push(
    new ethereum.EventParam(
      "bidEndTime",
      ethereum.Value.fromUnsignedBigInt(bidEndTime)
    )
  )
  bidAnnounceEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return bidAnnounceEvent
}

export function createbidDoneEvent(
  nftAddress: Address,
  tokenId: BigInt,
  buyer: Address
): bidDone {
  let bidDoneEvent = changetype<bidDone>(newMockEvent())

  bidDoneEvent.parameters = new Array()

  bidDoneEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  bidDoneEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  bidDoneEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return bidDoneEvent
}

export function createbidtimeEvent(
  nftAddress: Address,
  tokenId: BigInt,
  bidder: Address,
  bidAmount: BigInt,
  time: BigInt
): bidtime {
  let bidtimeEvent = changetype<bidtime>(newMockEvent())

  bidtimeEvent.parameters = new Array()

  bidtimeEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  bidtimeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  bidtimeEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidtimeEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )
  bidtimeEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return bidtimeEvent
}

export function createitemListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  minPrice: BigInt
): itemListed {
  let itemListedEvent = changetype<itemListed>(newMockEvent())

  itemListedEvent.parameters = new Array()

  itemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "minPrice",
      ethereum.Value.fromUnsignedBigInt(minPrice)
    )
  )

  return itemListedEvent
}
