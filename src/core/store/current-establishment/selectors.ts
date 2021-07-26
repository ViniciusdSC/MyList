import {Establishment} from 'establishment/store';
import {useAppSelector} from 'store';

export function useCurrentEstablishment(): Establishment | null {
  const establishment = useAppSelector(
    ({currentEstablishment}) => currentEstablishment,
  );

  return establishment;
}
