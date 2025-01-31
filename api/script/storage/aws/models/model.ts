import * as q from "q";
import * as Sequelize from "sequelize";
import { createAccount } from "./account";
import { createApp } from "./app";
import { createCollaborators } from "./collaborators";
import { createDeployment } from "./deployment";
import { createPackage } from "./package";
import { createAccessKey } from "./accessKey";

export function createModels(sequelize: Sequelize.Sequelize) {
    return q.all([ 
      createAccount(sequelize)
    , createApp(sequelize)
    , createPackage(sequelize)
    , createDeployment(sequelize)
    , createAccessKey(sequelize)
    , createCollaborators(sequelize)])
}

export const MODELS = {
  COLLABORATOR : "collaborator",
  DEPLOYMENT : "deployment",
  APPS : "apps",
  PACKAGE : "package",
  ACCESSKEY : "accessKey",
  ACCOUNT : "account",
}