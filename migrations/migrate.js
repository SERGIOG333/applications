import { runMigration } from "./migration_v1.js";

runMigration()
.then((result) => {
    if (result.success){
        console.log('migration completed successfully');
        process.exit(1);
    } else{
        console.error('migration failed:', result.error);
        process.exit(1);
    }
})
.catch((error) => {
    console.error('Unhandled migration error:', error);
    process.exit(1);
});