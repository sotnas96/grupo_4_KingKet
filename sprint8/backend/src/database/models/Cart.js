module.exports = (sequelize, DataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncremet: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        total_price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    };
    const Cart = sequelize.define(alias, cols, config);
    //Aca van las relaciones
    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'user_id'
        });
        Cart.belongsTo(models.Event, {
            as: 'Event',
            foreignKey: 'event_id'
        })
    };
        
    return Cart;
}