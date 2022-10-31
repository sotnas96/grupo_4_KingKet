module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
            },
        user_name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        avatar_url: DataTypes.STRING(200)
    };
    let config = {
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    
    User.associate = models => {
        User.hasMany(models.Cart, {
            as: 'Cart',
            foreignKey: 'user_id'
        });
        User.belongsToMany(models.Event, {
            as: 'Event',
            through: 'users_events',
            foreignKey: 'user_id',
            otherKey: 'event_id',
            timestamps: true
        })
    };

    return User;

}