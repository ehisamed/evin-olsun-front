import React, { useState } from 'react'

const useChangeLocation = () => {
  const [selectedCity, setSelectedCity] = useState("lerik")

  return {
    selectedCity,
    setSelectedCity
  }
}

export default useChangeLocation