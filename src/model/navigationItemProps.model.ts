import { Observable } from 'rxjs';

export interface NavigationItemProps {
    name: string;
    url: string;
    showMenuItem$?: Observable<boolean>;
    clickHandler?: () => void;
    roles?: string[];
}
