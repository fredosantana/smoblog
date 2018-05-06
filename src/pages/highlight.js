import React from "react"

export default ({ data }) => (
	<div>
		<h2>Highlights of {data.site.siteMetadata.title} include...</h2>
		<div>
			<ul>
				<li>Scaling giant walls as a bird with a retractable beak</li>
			  <li>Dance with the locals of a Mexican-style village</li>
			  <li>Rampage through the jungle as a T-Rex</li>
			  <li>Sit next to a lonely stranger in the middle of the city</li>  
			</ul>
		</div>
		<p>It doesn't make a lot of sense, but it's a lot of fun.</p>
	</div>
)

export const query = graphql`
  query HighlightQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


