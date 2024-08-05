import { Model, Sequelize, DataTypes } from 'sequelize';


export default class AuthModel extends Model {
  public id?: number;
  public firstName!: string;
  public lastName!: string;
  public phoneNumber?: string;
  public email?: String;
  public password?: String;
  public isSuccessful!: { type: Boolean, default: false };
  public isActive!: { type: Boolean, default: false };
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
      type: DataTypes.STRING(255),
    },
    phoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isSuccessful: {
      type: DataTypes.BOOLEAN,
      defaultValue: false

    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true
  });
  AuthModel.sync();
}