/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import SourceWishlistItem from 'Component/WishlistItem/WishlistItem.component';
import ProductCard from 'Component/ProductCard';
import Field from 'Component/Field';
import AddToCart from 'Component/AddToCart';

export default class SharedWishlistItem extends SourceWishlistItem {
    renderAddToCart() {
        const {
            product,
            quantity,
            changeQuantity,
            configurableVariantIndex
        } = this.props;

        return (
            <div block="WishlistItem" elem="Row">
                <Field
                  id="item_qty"
                  name="item_qty"
                  type="number"
                  min={ 1 }
                  value={ quantity }
                  mix={ { block: 'WishlistItem', elem: 'Quantity' } }
                  onChange={ changeQuantity }
                />
                <AddToCart
                  product={ product }
                  quantity={ quantity }
                  configurableVariantIndex={ configurableVariantIndex }
                />
            </div>
        );
    }

    render() {
        const { product, parameters, isLoading } = this.props;

        return (
            <ProductCard
              product={ product }
              selectedFilters={ parameters }
              mix={ { block: 'WishlistItem' } }
              isLoading={ isLoading }
            >
                <>
                    { this.renderAddToCart() }
                </>
            </ProductCard>
        );
    }
}
