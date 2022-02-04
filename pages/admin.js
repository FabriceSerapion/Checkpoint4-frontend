import Link from 'next/link';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import CardAdmin from '../components/CardAdmin';

export default function Admin() {
  return (
    <>
      <div className="uk-grid uk-grid-column-large uk-child-width-1-1@s uk-child-width-1-4@m uk-child-width-1-4@l uk-margin uk-text-center ">
        <CardAdmin />
      </div>
    </>
  );
}