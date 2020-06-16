import { Component } from "@angular/core";
import { AppUserService } from "src/app/services/user.service";
import { UserModel } from "src/app/models/user.model";
import { GridModel } from "src/app/components/grid/grid.model";
import { FormBuilder, FormControl } from "@angular/forms";
import { GridParametersModel } from "src/app/components/grid/grid-parameters.model";

@Component({
    selector: "app-list-grid",
    templateUrl: "./grid.component.html"
})
export class AppListGridComponent {
    filters = this.formBuilder.group({
        id: new FormControl(),
        name: new FormControl(),
        email: new FormControl()
    });

    grid = new GridModel<UserModel>();

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly appUserService: AppUserService) {
        this.load();
    }

    filter() {
        this.grid.parameters = new GridParametersModel();
        this.grid.parameters.filters.add("id", "", this.filters.value.id);
        this.grid.parameters.filters.add("name", "", this.filters.value.name);
        this.grid.parameters.filters.add("email", "", this.filters.value.email);
        this.load();
    }

    load() {
        this.appUserService.grid(this.grid.parameters).subscribe((grid) => this.grid = grid);
    }
}
