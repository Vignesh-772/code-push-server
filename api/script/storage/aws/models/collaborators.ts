import * as Sequelize from "sequelize";



export function createCollaborators(sequelize: Sequelize.Sequelize) {
    return sequelize.define("collaborator", {
        email: {type: Sequelize.STRING, allowNull: false},
        appId: { type: Sequelize.STRING, allowNull: false },
        accountId: { type: Sequelize.STRING, allowNull: false, references: {
            model: sequelize.models["account"],
            key: 'id',
          },
        },
        permission: {
            type: Sequelize.DataTypes.ENUM({
                values: ["Collaborator", "Owner"]
            }),
            allowNull:true
        },
    })
}

