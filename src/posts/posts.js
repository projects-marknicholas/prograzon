import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Posts(){
	//Page Title
  useEffect(() => {
    document.title = "Posts | Prograzon";
  }, []);

	return(
		<div className="App">
			<div className="container">
				<section id="hero">
					<h1>Posts</h1>
				</section>
				<section id="challenge">
          <Link to="/a-search-algorithm" className="item">
            <div className="tip">Algorithm</div>
            <h2>A* Search Algorithm</h2>
            <p>The A* search algorithm is a popular and widely used pathfinding algorithm in computer science and artificial intelligence. It is used for finding the shortest path between two points in a graph, which could represent, for example, nodes in a map or cells in a grid.</p>
          </Link>
        </section>
			</div><br/>
		</div>
	)
}

export default Posts;