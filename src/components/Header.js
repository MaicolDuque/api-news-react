import React from 'react'

export default function Header({getNoticias}) {

  const categoriaRef = React.createRef();
  const enviarCategorias = () => {   
    const cat = categoriaRef.current.value
    getNoticias(cat)
  }
  

  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div className="row">
				<div className="col-md-6 px-0">
					<h1 className="display-4 font-italic">News Colombia</h1>
				</div>
				<div className="col-md-6 px-0">
					<div className="input-group">
						<select						
							className="custom-select"
							id="inputGroupSelect04"
              aria-label="Example select with button addon"
              ref={categoriaRef}
						>
              <option value="general">General</option>
							<option value="business">Business</option>
							<option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
						</select>
						<div className="input-group-append">
							<button onClick={enviarCategorias} className="btn btn-outline-secondary" type="button">
								Buscar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}
