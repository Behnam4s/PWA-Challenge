import React from 'react'
import {Route, Routes} from "react-router-dom";

function RoutesHandler({ routes  = [] }) {
  return (
    <Routes>
			{routes.map((route) => {
                const { path, component, element, ...props } = route;
                <Route
						{...props}
						// key={item}
						path={path}
						element={element}
					/>
			},
			)}
	</Routes>
  )
}

export default RoutesHandler