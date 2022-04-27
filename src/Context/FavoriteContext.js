import React from 'react'

const FavoriteContext = React.createContext({
  favoriteList: [],
  onToggleFavorite: () => {},
})

export default FavoriteContext
