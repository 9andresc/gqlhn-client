import { NextContext } from 'next';
import Router from 'next/router';

export function redirect(context: NextContext, target: string) {
  if (context.res) {
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    Router.replace(target);
  }
}
