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
            <div className="list-group col-12 col-md-3 col-lg-2">
                {products.map(product => (
                    <Link key={product._id} to={`/products/${product._id}`} className="text-capitalize list-group-item list-group-item-action">{product.title}</Link>
                ))}
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                    <button disabled={page === 1} onClick={this.prevPage} id="prev" className="mr-3 btn btn-primary">Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage} id="next" className="btn btn-primary">Próximo</button>
                </div>
            </div>
        );
    }
}