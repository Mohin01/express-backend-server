const { Pool } = require('pg');

// Database configuration - support both individual env vars and DATABASE_PUBLIC_URL
let pool;

if (process.env.DATABASE_PUBLIC_URL) {
    // Use Railway's DATABASE_PUBLIC_URL if available
    console.log('🔗 Using DATABASE_PUBLIC_URL for connection');
    pool = new Pool({
        connectionString: process.env.DATABASE_PUBLIC_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
} else if (process.env.DATABASE_URL) {
    // Fallback to DATABASE_URL if available
    console.log('🔗 Using DATABASE_URL for connection');
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
} else {
    // Use individual environment variables
    console.log('🔗 Using individual environment variables for connection');
    pool = new Pool({
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'express_backend',
        password: process.env.DB_PASSWORD || 'password',
        port: process.env.DB_PORT || 5432,
        // Add connection timeout and SSL for production
        connectionTimeoutMillis: 10000,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
}

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        console.error('Database config:', {
            hasDatabasePublicUrl: !!process.env.DATABASE_PUBLIC_URL,
            hasDatabaseUrl: !!process.env.DATABASE_URL,
            user: process.env.DB_USER || 'postgres',
            host: process.env.DB_HOST || 'localhost',
            database: process.env.DB_NAME || 'express_backend',
            port: process.env.DB_PORT || 5432,
            ssl: process.env.NODE_ENV === 'production'
        });
    } else {
        console.log('✅ Database connected successfully');
        console.log('Current database time:', res.rows[0].now);
    }
});

// Add connection event listeners
pool.on('connect', (client) => {
    console.log('🔌 New client connected to database');
});

pool.on('error', (err, client) => {
    console.error('💥 Unexpected error on idle client', err);
});

module.exports = pool; 