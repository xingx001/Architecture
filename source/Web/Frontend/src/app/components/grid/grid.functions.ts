import { FiltersModel } from "./filter/filters.model";
import { GridParametersModel } from "./grid-parameters.model";
import { OrderModel } from "./order/order.model";
import { PageModel } from "./pagination/page.model";

export function queryString(parameters: GridParametersModel): string {
    let url = "?";

    parameters.page = parameters.page ?? new PageModel();
    url += `page.index=${parameters.page.index}&`;
    url += `page.size=${parameters.page.size}&`;

    parameters.order = parameters.order ?? new OrderModel();
    url += `order.property=${parameters.order.property ?? ""}&`;
    url += `order.ascending=${parameters.order.ascending}&`;

    parameters.filters = parameters.filters ?? new FiltersModel();
    parameters.filters.forEach((filter, index) => {
        url += `filters[${index}].property=${filter.property ?? ""}&`;
        url += `filters[${index}].comparison=${filter.comparison ?? ""}&`;
        url += `filters[${index}].value=${filter.value ?? ""}&`;
    });

    return url;
}
