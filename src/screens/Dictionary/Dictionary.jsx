import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

function Dictionary() {
    const navigate = useNavigate();

    // Estado para los inputs
    const [espaniol, setEspaniol] = useState('');
    const [ingles, setIngles] = useState('');
    const [portugues, setPortugues] = useState('');

    // Estado para el diccionario
    const [diccionario, setDiccionario] = useState([
        {
            espaniol: "lunes",
            ingles: "monday",
            portugues: "segunda-feira"
        }
    ]);

    // Estado para el input de eliminación
    const [deleteWord, setDeleteWord] = useState('');

    // Estado para el input de traducción
    const [translateWord, setTranslateWord] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('ingles');
    const [translationResult, setTranslationResult] = useState('');

    // Manejar el submit del formulario para agregar palabras
    const handleAddWord = () => {
        const newWord = { espaniol, ingles, portugues };
        setDiccionario([...diccionario, newWord]);
        // Limpiar los inputs después de agregar la palabra
        setEspaniol('');
        setIngles('');
        setPortugues('');
    };

    // Manejar el submit del formulario para eliminar palabras
    const handleDeleteWord = () => {
        setDiccionario(diccionario.filter(word =>
            word.espaniol !== deleteWord &&
            word.ingles !== deleteWord &&
            word.portugues !== deleteWord
        ));
        // Limpiar el input después de eliminar la palabra
        setDeleteWord('');
    };

    // Manejar el submit del formulario para traducir palabras
    const handleTranslateWord = () => {
        const word = diccionario.find(word =>
            word.espaniol === translateWord ||
            word.ingles === translateWord ||
            word.portugues === translateWord
        );
        if (word) {
            setTranslationResult(word[selectedLanguage]);
        } else {
            setTranslationResult('No encontrado');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h3>DICTIONARY USIP</h3>
                    <p>Este <strong> modulo (diccionario) </strong> corresponde al <strong>recuperatorio del </strong> <strong style={{ color: 'red' }} > modulo-7 </strong> ReactJS. <strong>URL:</strong>  </p>

                    <div className="card">
                        <div className="card-header">
                            <h3>Menú</h3>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#addModal">
                                        Agregar palabra
                                    </button>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        Eliminar palabra
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#translateModal">
                                        Traducir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />




                    <div className="card">

                        <div className="card-body">
                            {/* Imprimir diccionario */}
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Español</th>
                                        <th>Ingles</th>
                                        <th>Portugues</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {diccionario.map((word, index) => (
                                        <tr key={index}>
                                            <td>{word.espaniol}</td>
                                            <td>{word.ingles}</td>
                                            <td>{word.portugues}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>

            {/* Modal para adicionar palabra */}
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">Modal: Agregar palabra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="espaniolInput" className="form-label">Español</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="espaniolInput"
                                    value={espaniol}
                                    onChange={(e) => setEspaniol(e.target.value)}
                                />
                                <label htmlFor="inglesInput" className="form-label">Ingles</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inglesInput"
                                    value={ingles}
                                    onChange={(e) => setIngles(e.target.value)}
                                />
                                <label htmlFor="portuguesInput" className="form-label">Portugues</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="portuguesInput"
                                    value={portugues}
                                    onChange={(e) => setPortugues(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={handleAddWord}>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para eliminar palabras */}
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">Modal: Eliminar palabra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="deleteInput" className="form-label">Palabra a eliminar</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="deleteInput"
                                    value={deleteWord}
                                    onChange={(e) => setDeleteWord(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDeleteWord}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para traducir palabras */}
            <div className="modal fade" id="translateModal" tabIndex="-1" aria-labelledby="translateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="translateModalLabel">Modal: Traducir palabra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="translateInput" className="form-label">Palabra a traducir</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="translateInput"
                                    value={translateWord}
                                    onChange={(e) => setTranslateWord(e.target.value)}
                                />
                                <label htmlFor="languageSelect" className="form-label">Seleccionar idioma</label>
                                <select
                                    className="form-select"
                                    id="languageSelect"
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                >
                                    <option value="ingles">Inglés</option>
                                    <option value="portugues">Portugués</option>
                                    <option value="espaniol">Español</option>
                                </select>
                                <label htmlFor="resultInput" className="form-label mt-3">Traducción</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="resultInput"
                                    value={translationResult}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={handleTranslateWord}>Traducir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dictionary;