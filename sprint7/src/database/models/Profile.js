module.exports = (sequelize, DataTypes) => {
    let alias = 'Profile';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_profile: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users_profile',
        timestamps: false
    };
    const Profile = sequelize.define(alias,cols,config);

    Profile.associate = models =>{
        Profile.hasMany(models.User, {
            as: 'User',
            foreignKey: 'user_profile'
        })
    };
    return Profile;
    
}