import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../tools/card';
import Tab from '../tools/tab';
import Tabs from '../tools/tabs';

function ASearchAlgorithm(){
	//Page Title
  useEffect(() => {
    document.title = "A* Search Algorithm | Prograzon";
  }, []);

  const python = `
def astar(start, goal):
    open_set = [start]
    closed_set = set()
    came_from = {}

    g_score = {node: float('inf') for node in graph.nodes}
    g_score[start] = 0

    f_score = {node: float('inf') for node in graph.nodes}
    f_score[start] = heuristic(start, goal)

    while open_set:
        current = min(open_set, key=lambda node: f_score[node])
        if current == goal:
            return reconstruct_path(came_from, current)
        
        open_set.remove(current)
        closed_set.add(current)
        
        for neighbor in get_neighbors(current):
            if neighbor in closed_set:
                continue
            tentative_g_score = g_score[current] + distance(current, neighbor)
            
            if tentative_g_score < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g_score
                f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal)
                if neighbor not in open_set:
                    open_set.append(neighbor)
    return None
  `;

  const cSharp = `
public List<Node> AStar(Node start, Node goal)
{
    List<Node> openSet = new List<Node> { start };
    HashSet<Node> closedSet = new HashSet<Node>();
    Dictionary<Node, Node> cameFrom = new Dictionary<Node, Node>();

    Dictionary<Node, float> gScore = nodes.ToDictionary(node => node, _ => float.MaxValue);
    gScore[start] = 0;

    Dictionary<Node, float> fScore = nodes.ToDictionary(node => node, _ => float.MaxValue);
    fScore[start] = heuristic(start, goal);

    while (openSet.Count > 0)
    {
        Node current = openSet.OrderBy(node => fScore[node]).First();

        if (current == goal)
            return ReconstructPath(cameFrom, current);

        openSet.Remove(current);
        closedSet.Add(current);

        foreach (Node neighbor in GetNeighbors(current))
        {
            if (closedSet.Contains(neighbor))
                continue;

            float tentativeGScore = gScore[current] + Distance(current, neighbor);

            if (tentativeGScore < gScore[neighbor])
            {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);
                if (!openSet.Contains(neighbor))
                    openSet.Add(neighbor);
            }
        }
    }

    return null;
}
  `;

  const java = `
public List<Node> aStar(Node start, Node goal) {
    List<Node> openSet = new ArrayList<>();
    Set<Node> closedSet = new HashSet<>();
    Map<Node, Node> cameFrom = new HashMap<>();

    Map<Node, Double> gScore = new HashMap<>();
    nodes.forEach(node -> gScore.put(node, Double.POSITIVE_INFINITY));
    gScore.put(start, 0.0);

    Map<Node, Double> fScore = new HashMap<>();
    nodes.forEach(node -> fScore.put(node, Double.POSITIVE_INFINITY));
    fScore.put(start, heuristic(start, goal));

    while (!openSet.isEmpty()) {
        Node current = openSet.stream().min(Comparator.comparing(fScore::get)).get();

        if (current.equals(goal)) {
            return reconstructPath(cameFrom, current);
        }

        openSet.remove(current);
        closedSet.add(current);

        for (Node neighbor : getNeighbors(current)) {
            if (closedSet.contains(neighbor)) {
                continue;
            }

            double tentativeGScore = gScore.get(current) + distance(current, neighbor);

            if (tentativeGScore < gScore.get(neighbor)) {
                cameFrom.put(neighbor, current);
                gScore.put(neighbor, tentativeGScore);
                fScore.put(neighbor, gScore.get(neighbor) + heuristic(neighbor, goal));
                if (!openSet.contains(neighbor)) {
                    openSet.add(neighbor);
                }
            }
        }
    }

    return null;
}
  `;

  const javascript = `
function astar(start, goal) {
    let openSet = [start];
    let closedSet = new Set();
    let cameFrom = {};

    let gScore = new Map();
    gScore.set(start, 0);

    let fScore = new Map();
    fScore.set(start, heuristic(start, goal));

    while (openSet.length > 0) {
        let current = openSet.reduce((minNode, node) => fScore.get(node) < fScore.get(minNode) ? node : minNode);

        if (current === goal) {
            return reconstructPath(cameFrom, current);
        }

        openSet = openSet.filter(node => node !== current);
        closedSet.add(current);

        for (let neighbor of getNeighbors(current)) {
            if (closedSet.has(neighbor)) {
                continue;
            }

            let tentativeGScore = gScore.get(current) + distance(current, neighbor);

            if (!gScore.has(neighbor) || tentativeGScore < gScore.get(neighbor)) {
                cameFrom[neighbor] = current;
                gScore.set(neighbor, tentativeGScore);
                fScore.set(neighbor, gScore.get(neighbor) + heuristic(neighbor, goal));

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return null;
}
  `;

	return(
		<div className="App">
			<section id="hero">
        <h1>A* Search Algorithm</h1>
        <span className="wn">
          The A* search algorithm is a popular and widely used pathfinding algorithm in computer science and artificial intelligence. It is used for finding the shortest path between two points in a graph, which could represent, for example, nodes in a map or cells in a grid.
        </span>
      </section>
      <div className="container">
        <Card>
          <Tabs>
            <Tab label="Python">
              <pre>{python}</pre>
            </Tab>
            <Tab label="C#">
              <pre>{cSharp}</pre>
            </Tab>
            <Tab label="Java">
              <pre>{java}</pre>
            </Tab>
            <Tab label="JS">
              <pre>{javascript}</pre>
            </Tab>
          </Tabs>
        </Card>
      </div><br/>
		</div>
	)
}

export default ASearchAlgorithm;