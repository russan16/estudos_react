import React, {Component} from "react";
import api from '../services/api';

export default class Product extends Component {
    state = {
        product: {}
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState({product: response.data});
    }

    render() {
        const {product} = this.state;

        return (
            <div className="product-info col-12 mt-5">
                <h1 className="display-3">{product.title}</h1>
                <p className="text-muted">{product.description}</p>
                <a href={product.url} className="btn btn-info">Link do GitHub</a>
            </div>
        );
    }
}