import { BigInt, Address } from "@graphprotocol/graph-ts";

import {
  bidAnnounce as bidAnnounceEvent,
  bidDone as bidDoneEvent,
  bidtime as bidtimeEvent,
  itemListed as itemListedEvent,
} from "../generated/nftbid/nftbid";
import {
  bidAnnounce,
  activeItem,
  bidDone,
  bidtime,
  itemListed,
} from "../generated/schema";

export function handlebidAnnounce(event: bidAnnounceEvent): void {
  let entity = new bidAnnounce(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.minPrice = event.params.minPrice;
  entity.bidStartTime = event.params.bidStartTime;
  entity.bidEndTime = event.params.bidEndTime;
  entity.owner = event.params.owner;

  entity.save();
}

export function handlebidDone(event: bidDoneEvent): void {
  let entity = new bidDone(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );

  let entity1 = activeItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );

  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.buyer = event.params.buyer;
  entity1!.buyer = event.params.buyer;
  entity1!.save();
  entity.save();
}

export function handlebidtime(event: bidtimeEvent): void {
  let entity = new bidtime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.bidder = event.params.bidder;
  entity.bidAmount = event.params.bidAmount;
  entity.time = event.params.time;

  entity.save();
}

export function handleitemListed(event: itemListedEvent): void {
  let entity = new itemListed(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );

  let entity1 = activeItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );

  if (!entity1) {
    entity1 = new activeItem(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  entity.seller = event.params.seller;
  entity1.seller = event.params.seller;
  entity.nftAddress = event.params.nftAddress;
  entity1.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity1.tokenId = event.params.tokenId;
  entity.minPrice = event.params.minPrice;
  entity1.minPrice = event.params.minPrice;
  entity1.buyer = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );
  entity.save();
  entity1.save();
}
function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString();
}
