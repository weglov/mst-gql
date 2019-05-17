/* This is a mst-sql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef } from "mst-gql"

import { UserModel } from "./UserModel"
import { RootStore } from "./index"

/**
 * MessageBase
 * auto generated base class for the model MessageModel.
 */
export const MessageModelBase = MSTGQLObject
  .named('Message')
  .props({
    __typename: types.optional(types.literal("Message"), "Message"),
    id: types.identifier,
    user: MSTGQLRef(types.late(() => UserModel)),
    text: types.string,
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export const messageModelPrimitives = `
__typename
id
text
`
