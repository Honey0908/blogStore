import { dbAdmin } from '../firebaseAdmin';
import { FieldValue } from 'firebase-admin/firestore';

export async function logPageView() {
  await dbAdmin
    .collection('analytics')
    .doc('pageViews')
    .set({ count: FieldValue.increment(1) }, { merge: true });
}
