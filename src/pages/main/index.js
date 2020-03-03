import React, {Component} from 'react';
import api from '../../services/api';

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
                    <li key={product._id} className="border p-3 col-4 flex-column justify-content-between">
                        <div className="w-100">
                            <h2 className="text-capitalize display-3">{product.title}</h2>
                            <h4 className="text-muted">{product.description}</h4>
                        </div>
                        <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-3">Acessar</a>
                    </li>
                ))}
                <div className="d-flex flex-row justify-content-between w-100 mt-4">
                    <button disabled={page === 1} onClick={this.prevPage} id="prev" className="btn btn-primary">Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage} id="next" className="btn btn-primary">Próximo</button>
                </div>
            </ul>
        );
    }
}