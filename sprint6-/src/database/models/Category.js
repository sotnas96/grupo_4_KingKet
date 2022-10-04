module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    };
    let config = {
        tableName: 'Categories',
        timestamps: false
    };
    const Category = sequelize.define(alias,cols,config);

    Category.associate = models =>{
        Category.hasMany(models.Event, {
            as: 'Event',
            foreignKey: 'category_id'
        })
    };
    return Category;
    
}