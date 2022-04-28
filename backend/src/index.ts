import initializeExpress from './express/app';

/**
 * The main function.
 * Calls all the initialization functions.
 */
const main = async () => {
    initializeExpress();
};

main().catch((err) => {
    console.log('Unknown error', err.message);
});
