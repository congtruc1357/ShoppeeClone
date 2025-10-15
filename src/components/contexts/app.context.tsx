import React, { createContext, useState } from 'react'
import { getAccessTokenFromLS, getProfileFromLS } from '../../utils/auth'
import type { user } from '../../types/user.type'

interface AppContextInterFace {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: user | null
  setProfile: React.Dispatch<React.SetStateAction<user | null>>
}

const initialAppContext: AppContextInterFace = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null
}

export const AppContext = createContext<AppContextInterFace>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<user | null>(initialAppContext.profile)

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
