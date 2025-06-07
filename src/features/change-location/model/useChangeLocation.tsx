// src/features/change-location/model/useChangeLoaction.tsx

'use client'

import React, { useState } from 'react'

const useChangeLocation = () => {
  const [selectedCity, setSelectedCity] = useState("lerik")

  return {
    selectedCity,
    setSelectedCity
  }
}

export default useChangeLocation