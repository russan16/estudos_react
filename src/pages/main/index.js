import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from "react-router-dom";

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const {docs, ...productInfo} = response.data;
        this.setState({products: docs, productInfo, page});
    }

    prevPage = () => {
        const {page} = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const {page, productInfo} = this.state;
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render() {
        const {products, page, productInfo} = this.state;
        return (
            <ul className="list-unstyled d-flex flex-row flex-wrap">
                {products.map(product => (
                    <li key={product._id} className="p-2 col-3">
                        <div className="border rounded bg-light shadow p-3 flex-column d-flex justify-content-between h-100">
                            <div className="w-100">
                                <h2 className="text-capitalize h2">{product.title}</h2>
                            </div>
                            <div className="mt-3 d-flex flex-row justify-content-end">
                                <Link to={`/product/${product._id}`} className="btn btn-secondary">Saiba mais</Link>
                            </div>
                        </div>
                    </li>
                ))}
                <li className="d-flex flex-row justify-content-center w-100 mt-4">
                    <button disabled={page === 1} onClick={this.prevPage} id="prev" className="mr-3 btn btn-primary">Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage} id="next" className="btn btn-primary">Próximo</button>
                </li>
            </ul>
        );
    }
}