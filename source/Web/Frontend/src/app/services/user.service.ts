import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/user.model";
import { GridModel } from "src/app/components/grid/grid.model";
import { GridParametersModel } from "src/app/components/grid/grid-parameters.model";
import { queryString } from "src/app/components/grid/grid.functions";

@Injectable({ providedIn: "root" })
export class AppUserService {
    constructor(private readonly http: HttpClient) { }

    add(model: UserModel) {
        return this.http.post<number>("users", model);
    }

    delete(id: number) {
        return this.http.delete(`users/${id}`);
    }

    get(id: number) {
        return this.http.get<UserModel>(`users/${id}`);
    }

    grid(parameters: GridParametersModel) {
        return this.http.get<GridModel<UserModel>>("users/list" + queryString(parameters));
    }

    list() {
        return this.http.get<UserModel[]>("users");
    }

    update(model: UserModel) {
        return this.http.put(`users/${model.id}`, model);
    }
}
