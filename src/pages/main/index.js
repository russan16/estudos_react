import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({products: response.data.docs});
        console.log(response.data);
    }

    render() {
        const {products} = this.state;
        return (
            <ul className="product-list">
                {products.map(product => (
                    <li key={product._id}>
                        <h2>{product.title}</h2>
                        <h4>{product.description}</h4>
                        <a href={product.url} target="_blank">Acessar</a>
                    </li>
                ))}
            </ul>
        );
    }
}