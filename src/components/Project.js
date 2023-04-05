import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { works } from '../data/works';

export const Project = () => {

	const [project, setProject] = useState({});
	const params = useParams();

	useEffect(() => {
		let projects = works.filter(work => work.url === params.id);
		console.log(projects[0]);
		setProject(projects[0]);
		console.log(project);
	}, [params.id, project]);

	return (
		<div className = "page page-work">
			<div className = 'mask'>
				<img 
					src = {"/images/" + project.id}
					alt = 'images'
				/>
			</div>
			<h1 className = "heading">{project.name}</h1>
			<p>{project.tec}</p>
			<p>{project.description}</p>
			<a 
				href = {"https://" + project.url}
				target = "_blank"
				rel = "noreferrer"
			>Ir a Proyecto</a>
		</div>
	);
}