// ag-grid-ng2 v6.1.2-beta
import { AgFrameworkComponent } from "./agFrameworkComponent";
export interface AgRendererComponent extends AgFrameworkComponent<any> {
    agInit(params: any): void;
    refresh?(params: any): void;
}