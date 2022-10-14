module.exports = (sequelize,DataTypes) => {
    let alias = 'Event'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
       organizer: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        competence: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        oponents: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        location: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_time: {
            type: DataTypes.DATE
        },
        price:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        image: DataTypes.STRING(200),
        game_description: DataTypes.TEXT
    };
    let config = {
        tableName: 'events_table',
        timestamps: false
    };
    const Event = sequelize.define(alias, cols, config);

    Event.associate = models => {
        Event.hasMany(models.Cart, {
            as: 'Cart',
            foreignKey: 'event_id'
        });
        Event.belongsTo(models.Category, {
            as: 'Category',
            foreignKey: 'category_id'
        });
        
        Event.belongsToMany(models.User, {
            as: 'User',
            through: 'users_events',
            foreignKey: 'event_id',
            otherKey: 'user_id',
            timestamps: false
        })
    };
    
    return Event;
}