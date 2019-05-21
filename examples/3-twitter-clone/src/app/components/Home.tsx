import React from "react"

import { Query } from "../models/reactUtils"
import { Error } from "./Error"
import { Loading } from "./Loading"
import { Message } from "./Message"
import { Composer } from "./Composer"

export const Home = () => (
  <>
    <div className="header">
      Share 🤯 experience...
      <br />
      <br />
      <Composer />
    </div>
    <Query query={store => store.loadInitialMessages()}>
      {({ store, error, loading, setQuery }) => {
        if (error) return <Error>{error.message}</Error>
        if (!store.messages.size) return <Loading />
        return (
          <>
            <ul>
              {store.sortedMessages.map(message => (
                <Message key={message.id} message={message} />
              ))}
            </ul>
            {loading ? (
              <Loading />
            ) : (
              <button
                className="loadmore"
                onClick={() => {
                  setQuery(store.loadMore())
                }}
              >
                Load more...
              </button>
            )}
          </>
        )
      }}
    </Query>
  </>
)