import { Model, Sequelize, DataTypes } from 'sequelize';


export default class AuthModel extends Model {
    public id?: number;
    public firstName!: string;
    public lastName?: string;
    public phone?: string;
    public email?: String;
    public password?: String;
	public isSuccessful!:{type: Boolean, default: false};
	public isActive!:{type: Boolean, default: false};
  }

  export const AuthMap = (sequelize: Sequelize) => {
    AuthModel.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING(255)
      },
      lastName: {
        type: DataTypes.DATE,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      isSuccessful: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'users',
      timestamps: true
    });
    AuthModel.sync();
  }