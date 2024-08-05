'use client'

import React, { useEffect, useRef } from 'react'

import ArcMap from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'

function Map() {
  const container = useRef(null)

  useEffect(() => {
    if (!container.current) return

    const map = new ArcMap({
      basemap: 'topo-vector'
    })

    const view = new SceneView({
      container: container.current,
      map,
      zoom: 4,
      center: [15, 65]
    })

    return () => {
      view.destroy()
    }
  }, [])

  return <div style={{ width: '100%', height: '100%' }} ref={container} />
}

export default Map
