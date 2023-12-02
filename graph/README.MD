# GRAPH

## What is graph?

A graph data structure is a way of representing the relationships and connections between a set of entities. It consists of two main components: nodes (or vertices) and edges. Each node represents an entity, and each edge represents a connection or relationship between two nodes. The edges may have a direction (directed graph) or may not (undirected graph), and they can be weighted to represent some measure of importance or cost.

## Directed Vs Undirected Graph

<h3>Directed Graph (Digraph):</h3>
- In a directed graph, each edge has a direction associated with it. The edges are ordered pairs, indicating a one-way connection from one node to another.
- Formally, an edge from node A to node B is distinct from an edge from B to A. The presence of an edge from A to B doesn't imply the existence of an edge from B to A.
- Directed graphs are useful for representing asymmetric relationships or flows where the direction matters, such as in network traffic, dependencies, or hierarchical structures.
<br>
<br>

![View Design](assets/directed-graph.png)

<br>
<br>

<h3>Undirected Graph :</h3>
In an undirected graph, the edges have no direction. An edge between nodes A and B implies a connection in both directions—from A to B and from B to A.
<br>
<br>

![View Design](assets/undirected-graph.png)
