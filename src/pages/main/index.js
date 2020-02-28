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
            <ul className="product-list">
                {products.map(product => (
                    <li key={product._id}>
                        <h2>{product.title}</h2>
                        <h4>{product.description}</h4>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">Acessar</a>
                    </li>
                ))}
                <div className="pagination">
                    <button disabled={page === 1} onClick={this.prevPage} id="prev">Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage} id="next">Próximo</button>
                </div>
            </ul>
        );
    }
}