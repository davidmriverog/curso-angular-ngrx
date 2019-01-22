import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        
        let router = routerState.root;

        while(router.firstChild) {
            router = router.firstChild;
        }

        const { url, root: {queryParams} } = routerState;
        const { params } = router;

        return {
            url,params,queryParams
        };
    }
    
}