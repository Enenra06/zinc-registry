import {
  ClaimSet as ClaimSetEvent,
  ClaimRemoved as ClaimRemovedEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  ClaimSet,
  ClaimRemoved,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleClaimSet(event: ClaimSetEvent): void {
  let entity = new ClaimSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.subject = event.params.subject
  entity.issuer = event.params.issuer
  entity.id_bytes = event.params.id
  entity.key = event.params.key
  entity.data = event.params.data
  entity.updatedAt = event.params.updatedAt
  entity.save()
}

export function handleClaimRemoved(event: ClaimRemovedEvent): void {
  let entity = new ClaimRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.subject = event.params.subject
  entity.issuer = event.params.issuer
  entity.id_bytes = event.params.id
  entity.key = event.params.key
  entity.removedAt = event.params.removedAt
  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
