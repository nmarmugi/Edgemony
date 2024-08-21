import { useState, createContext } from "react"

export const StateContext = createContext();
export const SetStateContext = createContext();

export const initialClick = {
	home: false,
	projects: false,
	skills: false
}

export default function Provider({children}) {
	const [state, setState] = useState(initialClick)

	return (
		<StateContext.Provider value={state}>
			<SetStateContext.Provider value={setState}>
				{children}
			</SetStateContext.Provider>
		</StateContext.Provider>
	)
}