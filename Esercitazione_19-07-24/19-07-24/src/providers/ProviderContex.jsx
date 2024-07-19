import { createContext, useState } from "react"

export const ArticlesContext = createContext();
export const SetArticlesContext = createContext();

function ArticlesProvide({children}) {
	const [articles, setArticles] = useState([])
	
	return(
		<ArticlesContext.Provider value={{articles}}>
			<SetArticlesContext.Provider value={{setArticles}}>
				{children}
			</SetArticlesContext.Provider>
		</ArticlesContext.Provider>
	)
}

export default ArticlesProvide