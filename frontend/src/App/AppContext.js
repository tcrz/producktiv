import React from "react";

export const defaultUser = {
        "_id": "",
        "username": "",
        "videos": [],
        "notes": [],
        "articles": [],
        "ratings": [],
        "avgRating": 0,
        "token": null
}

export const resetUser = () => {}

export const AppContext = React.createContext({
  user: defaultUser,
  resetUser: resetUser
})

